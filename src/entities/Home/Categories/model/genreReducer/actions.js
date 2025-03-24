export const GET_GENRE='GET_GENRE';
export const GET_IMG_GENRE='GET_IMG_GENRE';
export const getGenre=(data)=>({
    type:GET_GENRE,
    payload:data,
});
export const getImgGenre=(data,genre)=>({
    type:GET_IMG_GENRE,
    payload:{data:data,genre:genre},
});