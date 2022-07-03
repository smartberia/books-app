import { BOOKS } from '../../http/endpoints';
import { axiosRequest } from '../../http/http';
import { IBookItem } from './bookItem.service.model';

export const requestBookItem = async (id: string) => {
    const { data } = await axiosRequest.get<{ book: IBookItem }>(`${BOOKS}/${id}`);

    return data.book;
};
