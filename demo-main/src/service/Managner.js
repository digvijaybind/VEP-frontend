import axios from "axios";

import { SuccessHandler, errorHandler } from "./helper";

const api = axios.create({
  baseURL: "https://virtual-exhibition-center.herokuapp.com//",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
export const getCards = () => {
  return api
    .get(`${localStorage.getItem("userType")}/cards`)
    .then(SuccessHandler)
    .catch(errorHandler);
};

export const getCard = (cardId) => {
  return api
    .get(
      `https://virtual-exhibition-center.herokuapp.com//manager/card/${cardId}`
    )
    .then(SuccessHandler)
    .catch(errorHandler);
};

export const deleteCard = (cardId) => {
  console.log("Delete Card Method Called");
  return api
    .delete(`manager/card/${cardId}`)
    .then(SuccessHandler)
    .catch(errorHandler);
};

export const getByCategory = (data) => {
  return api

    .get(`${localStorage.getItem("userType")}/cards/category/${data}`)

    .then(SuccessHandler)
    .catch(errorHandler);
};

export const UpdateStalls = (cardId, data) => {
  return api
    .patch(`manager/card/${cardId}`, data)
    .then(SuccessHandler)
    .catch(errorHandler);
};

export const DeleteStalls = (Credential) => {
  return api
    .delete("manager/card/:id", Credential)
    .then(SuccessHandler)
    .catch(errorHandler);
};

export const getCardsByCompanyFilter = (searchText) => {
  return api
    .get(`common/cards/search/${searchText}`)
    .then(SuccessHandler)
    .catch(errorHandler);
};
