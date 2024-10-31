import { render, screen } from '@testing-library/react'
import ProductImageGallery from '../../src/components/ProductImageGallery'

describe('ProductImageGallery', () => {
    it('should render nothing if given an empty array', () => {
        const { container}  = render(<ProductImageGallery imageUrls={[]} />)
        expect(container).toBeEmptyDOMElement()
    })
    it('should render a list of images', () => {
        const imagesUrls:string[] = [
            "image1.png",
            "image2.png",
            "image3.png",
        ]
        render(<ProductImageGallery imageUrls={imagesUrls} />)
        const images = screen.getAllByRole('img')
        expect(images).toHaveLength(3)
        imagesUrls.forEach((url, index) => {
            expect(images[index]).toHaveAttribute('src', url)
        })
    })
})