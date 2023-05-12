import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
        <div className="flex items-center space-x-2">
           <Link href="/">
           <Image
          src="https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/63d3b65287589367f19fc287_Screen%20Shot%202023-01-27%20at%201.25.19%20AM.png"
          alt="logo" 
           width={50}
           height={50}
           className="round-full"
           />
           </Link>
           <Link href="/">
              <h1>Daily blog</h1>
           </Link>
        </div>
        <div>
           <Link 
             href="/"
             className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB8A] flex items-center 
               rounded-full text-center"
            >
              Sign up for my daily news
            </Link>  
        </div>
    </header>
  )
}

export default Header