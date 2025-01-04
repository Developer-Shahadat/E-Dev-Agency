
import HeadingSection from '../../components/HeadingSection'

const Testimonials = () => {
    return (
        <div className='bg-colorBg'>
            <div className='section-container'>
                <HeadingSection heading="What Our Clients Says" subheading="Testimonials" description="" />

                {/* testimonial carousel */}
                <div>
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item md:space-x-8 relative w-full">
                            <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>
                                <img
                                    src="/images/logos/logo1.png"
                                    className="size-28 mx-auto my-2 object-contain" />
                                <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, dolorem voluptatem. Laborum consequatur tempora, esse nostrum commodi maxime iste ipsam iure expedita adipisci quas hic accusamus accusantium quos, distinctio consequuntur.</p>

                                <div className='flex flex-col items-center space-y-2'>
                                    <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold'>J</div>
                                    <h3 className='text-lg font-bold text-gray-800'>John Doe</h3>
                                    <p className='text-sm text-gray-500'>CEO, TechCorp</p>
                                </div>
                            </div>

                            <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>
                                <img
                                    src="/images/logos/logo2.png"
                                    className="size-28 mx-auto my-2 object-contain" />
                                <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nobis, dignissimos voluptates debitis ut consectetur tempora sit? Ullam, veniam tempora quasi quod neque dolorum odio, ducimus maxime architecto tempore tenetur!</p>

                                <div className='flex flex-col items-center space-y-2'>
                                    <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold'>S</div>
                                    <h3 className='text-lg font-bold text-gray-800'>Jane Smith</h3>
                                    <p className='text-sm text-gray-500'>Marketing Lead, BizSoft</p>
                                </div>
                            </div>
                            {/* <img
                                src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                                className="w-full" /> */}
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item md:space-x-8 relative w-full">
                        <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>
                                <img
                                    src="/images/logos/logo1.png"
                                    className="size-28 mx-auto my-2 object-contain" />
                                <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, exercitationem. Sed quod, laudantium autem dolorem quibusdam officiis eius culpa veniam, eum accusamus qui aspernatur architecto a ad! Quod, ab fugiat?</p>

                                <div className='flex flex-col items-center space-y-2'>
                                    <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold'>A</div>
                                    <h3 className='text-lg font-bold text-gray-800'>Shahadat Hossain</h3>
                                    <p className='text-sm text-gray-500'>CEO, E-Dev</p>
                                </div>
                            </div>

                            <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>
                                <img
                                    src="/images/logos/logo2.png"
                                    className="size-28 mx-auto my-2 object-contain" />
                                <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam enim, exercitationem nesciunt soluta incidunt sunt ipsum! Consequuntur perferendis similique totam sapiente soluta nostrum quod suscipit, porro dolor sed distinctio exercitationem.</p>

                                <div className='flex flex-col items-center space-y-2'>
                                    <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold'>W</div>
                                    <h3 className='text-lg font-bold text-gray-800'>Watson Smith</h3>
                                    <p className='text-sm text-gray-500'>Marketing Lead, BizSoft</p>
                                </div>
                            </div>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item md:space-x-8 relative w-full">
                        <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>
                                <img
                                    src="/images/logos/logo1.png"
                                    className="size-28 mx-auto my-2 object-contain" />
                                <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur incidunt laboriosam labore, necessitatibus eligendi quidem aliquid esse ut aut quos ipsam amet animi cumque explicabo similique earum distinctio quaerat? Vel.</p>

                                <div className='flex flex-col items-center space-y-2'>
                                    <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold'>K</div>
                                    <h3 className='text-lg font-bold text-gray-800'>Sofaran</h3>
                                    <p className='text-sm text-gray-500'>CEO, TechCorp</p>
                                </div>
                            </div>

                            <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>
                                <img
                                    src="/images/logos/logo2.png"
                                    className="size-28 mx-auto my-2 object-contain" />
                                <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem deserunt reiciendis saepe in nam aspernatur sapiente quasi cupiditate consequatur repellendus facilis veniam voluptatum odit incidunt, aut porro nisi repudiandae delectus.</p>

                                <div className='flex flex-col items-center space-y-2'>
                                    <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold'>S</div>
                                    <h3 className='text-lg font-bold text-gray-800'>Jane Smith</h3>
                                    <p className='text-sm text-gray-500'>Marketing Lead, BizSoft</p>
                                </div>
                            </div>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                        <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>
                                <img
                                    src="/images/logos/logo1.png"
                                    className="size-28 mx-auto my-2 object-contain" />
                                <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quo ratione beatae vel veniam molestiae adipisci similique pariatur aspernatur hic, voluptatum error ipsa veritatis eligendi praesentium minima facilis architecto odit.</p>

                                <div className='flex flex-col items-center space-y-2'>
                                    <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold'>J</div>
                                    <h3 className='text-lg font-bold text-gray-800'>Abu Bakar Siddique Rakib</h3>
                                    <p className='text-sm text-gray-500'>CEO, HealthOs</p>
                                </div>
                            </div>

                            <div className='md:w-1/2 bg-white rounded-md shadow md:p-8 p-4'>
                                <img
                                    src="/images/logos/logo2.png"
                                    className="size-28 mx-auto my-2 object-contain" />
                                <p className='text-gray-600 italic mb-4 md:w-3/5 mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ipsum quae praesentium facilis molestiae consectetur earum voluptates fuga voluptate quis hic ipsa error cum, consequuntur a numquam ducimus accusamus omnis.</p>

                                <div className='flex flex-col items-center space-y-2'>
                                    <div className='size-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold'>S</div>
                                    <h3 className='text-lg font-bold text-gray-800'>Alhaz Ahmed</h3>
                                    <p className='text-sm text-gray-500'>App Developer, BizSoft</p>
                                </div>
                            </div>
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials