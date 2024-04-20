import {joinURL} from 'ufo'

export default defineEventHandler(async (event) => {

    //get runtimeconfig proxyUrl
    const proxyUrl = useRuntimeConfig().laravelProxyUrl

    //check the path
const path = event.path.replace(/^\/api\/register/,'register')  // /api/register ->register
   
    // const path = event.path
const target = joinURL(proxyUrl,path)

//proxy it

return proxyRequest(event,target)
})