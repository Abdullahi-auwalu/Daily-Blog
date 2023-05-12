import Image from "next/image"


function Logo(props: any) {
    const {renderDefault, title} = props;
  return (
    <div className="flex item-center space-x-2">
        <Image
          className="rounded-full object-cover"
          height={50}
          width={50}
          src="https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/63d3b65287589367f19fc287_Screen%20Shot%202023-01-27%20at%201.25.19%20AM.png"
          alt="logo" 
        />
        {renderDefault(props)}
    </div>
  )
}

export default Logo