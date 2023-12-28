
import {writeFile} from "fs/promises"
import path from "path";


import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.formData();
  const file= data.get("file");

  if(!file){
    return NextResponse.error(new Error("No file found"),{status:400})
  }

  const bytes=await file.arrayBuffer()
  const buffer=Buffer.from(bytes)

  const filePath=path.join(process.cwd(),"public",file.name)
  writeFile(filePath,buffer)
  console.log("archivo guardado en ",filePath);  

  return NextResponse.json("Upload file");
}
