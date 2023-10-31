import Categories from "../components/Categories"
import { baseUrl } from "./baseurl"
import { commonRequest } from "./commonRequest"

// add video http://localhost:5005

export const addVideo=async(body)=>{
    return await commonRequest('post',`${baseUrl}/videos`,body)
}


// get all videos
export const getAllVideos=async()=>{
    return await commonRequest('GET',`${baseUrl}/videos`,{})
}

// delete single video
export const deleteVideo=async(id)=>{
    return await commonRequest('DELETE',`${baseUrl}/videos/${id}`,{})
}


// add category
export const addCategory=async(body)=>{
    return await commonRequest('post',`${baseUrl}/categories`,body)
}

// get all Categories
export const getAllCat=async()=>{
      return await commonRequest(`GET`,`${baseUrl}/categories`,{})
}

// category delete
export const deleteCat=async(id)=>{
    return await commonRequest('DELETE',`${baseUrl}/categories/${id}`,{})
}

// add history
export const addHistory=async(body)=>{
    return await commonRequest('POST',`${baseUrl}/histories`,body)
}

// get all histories
export const getAllHistory=async()=>{
    return await commonRequest(`GET`,`${baseUrl}/histories`,{})
}

// delete history
export const deleteHistory=async(id)=>{
    return await commonRequest('DELETE',`${baseUrl}/histories/${id}`,{})
}


// drag and drop

// access single video
export const getVideo=async(id)=>{
    return await commonRequest('GET' ,`${baseUrl}/videos/${id}`,{})
}
// upadte category
export const updateCategory=async(id,body)=>{
    return await commonRequest('PUT',`${baseUrl}/categories/${id}`,body)
}
