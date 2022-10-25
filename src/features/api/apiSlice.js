import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'localhost:9000',
    }),
    endpoints: builder =>  ({

    })

})