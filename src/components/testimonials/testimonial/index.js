import './testimonial.css'

const Testimonial = () => {
    return (
        <div className='testimonial'>
            <img className='top-quotation' src="/assets/icons/top-qoutation.png" />
            <img className='bottom-quotation' src="/assets/icons/bottom-qoutation.png" />
            <img className='testimonial-profilepic' src="https://via.placeholder.com/100x100" />
            <h6>Amelia Smith</h6>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                took a galley of type and scrambled it to make a type specimen book.
            </p>
        </div>
    )
}

export default Testimonial