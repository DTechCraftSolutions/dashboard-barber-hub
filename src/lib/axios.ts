import axios, { AxiosError } from "axios";

const baseURL = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL: baseURL,
});

// Defina um tipo para a estrutura de mensagens de erro
interface ErrorMessages {
  400: string;
  401: string;
  403: string;
  404: string;
  500: string;
}

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      const status = error.response.status;
      let errorMessage = "Erro desconhecido";

      // Use o tipo explícito para a estrutura de mensagens de erro
      const errorMessages: ErrorMessages | any = {
        400: "Requisição inválida. Por favor, verifique os dados enviados.",
        401: "Não autorizado. Por favor, faça login novamente.",
        403: "Acesso proibido. Você não tem permissão para acessar este recurso.",
        404: "Recurso não encontrado.",
        500: "Erro interno do servidor. Tente novamente mais tarde.",
      };

      if (errorMessages[status]) {
        errorMessage = errorMessages[status];
      }

      console.error(
        `Erro de resposta do servidor (${status}): ${errorMessage}`,
      );
      console.error("Mensagem de erro do servidor:", error.response.data);

      return Promise.reject({ message: errorMessage });
    } else if (error.request) {
      console.error("Erro na solicitação, não houve resposta do servidor");
      return Promise.reject({
        message: "Erro na solicitação. Não houve resposta do servidor.",
      });
    } else {
      console.error("Erro ao configurar a solicitação:", error.message);
      return Promise.reject({ message: "Erro ao configurar a solicitação." });
    }
  },
);

export default api;
