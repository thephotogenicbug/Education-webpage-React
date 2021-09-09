import React from 'react'
import Footer from '../Components/Footer'
import { Icon } from '../Components/icons/styles/icons'
import {Link} from 'react-router-dom'
import './footer.css'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>Head Office</Footer.Title>
                     <p className="text-white">
                     <i class="fas fa-map-marker-alt"></i> No 20 2nd Floor Lady Curzon Rd Santha Complex Shivaji Nagar Bengaluru Karnataka 560001
                     </p>
                     <p className="text-white"><i class="fas fa-phone-alt"></i> +91 80 25591146</p>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>University</Footer.Title>
                    <Footer.Link href="https://www.eduprov.in/annamalaiuniversity">Annamalai University</Footer.Link>
                    <Footer.Link href="https://www.eduprov.in/jainuniversity">Jain University</Footer.Link>
                    <Footer.Link href="https://www.eduprov.in/singhaniauniversity">Singhania University</Footer.Link>
                 
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Form</Footer.Title>
                    <Footer.Link href="/applicationform">Application Form</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="https://www.facebook.com/eduprovinstitute/"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="https://www.instagram.com/eduprov_education/"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="https://twitter.com/eduprov"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}