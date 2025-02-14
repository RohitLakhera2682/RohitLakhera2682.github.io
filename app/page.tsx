
"use client"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import PDF from "@/components/pdfcomp";

export default function Home() {
  return (
    <>
    <nav className='py-5 fixed top-0 right-0 left-0 bg-white'>
      <div className='flex justify-center'>
        <div className='px-8 text-2xl' onClick={() => {}} >Home</div>
        <div className='px-8 text-2xl' onClick={() => {}} >About</div>
        <div className='px-8 text-2xl' onClick={() => {}} >Portfolio</div>
        <div className='px-8 text-2xl' onClick={() => {}} >Contact</div>
      </div>
     </nav>
     <div className='bg-[url(/bg.jpg)] h-screen bg-cover'>
          <div className="h-screen flex items-center justify-center text-white">
            <div>
            <div className="text-8xl">
                    Rohit Lakhera
                  </div>
                  <div className="ml-3 text-3xl">
                     Web Developer
                  </div>
            </div>
                  
          </div>
     </div>
     <div>
     <div className="flex justify-center my-12 text-center text-4xl ">About</div>
     <div className="h-screen flex justify-center items-center">
      {/* <embed src="/Rohit_s_Resume.pdf" type="application/pdf" className="w-full h-[90vh]" /> */}
      <PDF></PDF>
    </div>
     </div>
     <div >
      <div className="my-12 text-center text-4xl ">Portfolio</div>
     <div className='flex'>
      <img src="books.jpg" alt="book image" height={500} width={700} className="m-10" />
      
      <div className=" mr-5 grid grid-cols-2 grid-rows-2 gap-4">
        <Card >
          <CardHeader><CardTitle>Azure Static web App</CardTitle></CardHeader>
          <CardContent>
          With Static Web Apps, static assets are separated from a traditional web server and are instead served from points geographically distributed around the world.
          </CardContent>
        </Card>
        <Card >
          <CardHeader><CardTitle>Azure Static web App</CardTitle></CardHeader>
          <CardContent>
          With Static Web Apps, static assets are separated from a traditional web server and are instead served from points geographically distributed around the world.
          </CardContent>
        </Card>
        <Card >
          <CardHeader><CardTitle>Azure Static web App</CardTitle></CardHeader>
          <CardContent>
          With Static Web Apps, static assets are separated from a traditional web server and are instead served from points geographically distributed around the world.
          </CardContent>
        </Card>
        <Card >
          <CardHeader><CardTitle>Azure Static web App</CardTitle></CardHeader>
          <CardContent>
          With Static Web Apps, static assets are separated from a traditional web server and are instead served from points geographically distributed around the world.
          </CardContent>
        </Card>
        
      </div>
     </div>
     </div>

      <div className="bg-blue-300 mt-12 py-12">
        <div className="flex justify-center">
        <Link href={"https://www.gmail.com"}><img src="mail.png" alt="" height={45} width={45} className="m-5"/></Link>
        <Link href={"https://www.github.com"}><img src="github.png" alt="" height={45} width={45} className="m-5"/></Link>
        <Link href={"https://www.instagram.com"}><img src="instagram.png" alt="" height={45} width={45} className="m-5"/></Link>
        <Link href={"https://www.x.com"}><img src="social-media.png" alt="" height={45} width={45} className="m-5"/></Link>
        <Link href={"https://www.linkedin.com"}><img src="linkedin.png" alt="" height={45} width={45} className="m-5"/></Link>
        <Link href={"https://www.youtube.com"}><img src="youtube.png" alt="" height={45} width={45} className="m-5"/></Link>
        </div>
        <div className="flex justify-center">Created by Rohit Lakhera</div>
      </div>
     
     
    </>
  );
}
