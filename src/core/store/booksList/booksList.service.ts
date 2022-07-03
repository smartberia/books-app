import { BOOKS } from '../../http/endpoints';
import { axiosRequest } from '../../http/http';
import { IBooksList } from './booksList.service.model';

export const requestBooksList = async (query: string) => {
    const { data } = await axiosRequest.get<IBooksList>(BOOKS, {
        params: { q: query },
    });

    return data;
};
