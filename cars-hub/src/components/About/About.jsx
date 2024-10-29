import React from 'react'

const About = () => {
  return (
    <>
    
    <div>
       <div className="flex p-10">
            <div className="w-1/2">
                <h2 className="text-3xl font-bold mb-4">About us</h2>
                <p className="mb-4 mt-3">
                    Being head detailer at Porsche, I have learned a lot and want to share and provide 
                    the same level of expertise and service to everyone who comes through my shop. 
                    With experience of over 5 years, saying this is a passion would be an understatement.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Learn more</button>
            </div>
            <div className="w-1/2">
                {/* Image goes here */}
                <img src="public/images/images/about/636e94128fa4686e5c0de640_Text + image (4).png" alt="Detailer at work" />
            </div>
        </div>
    </div>
    </>
  )
}

export default About
