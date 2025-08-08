import { useEffect } from "react";


export default function Loading({ data }){
  if(data) return <h1>Nothing here yet</h1>
  return <h1>Loading...</h1>
}