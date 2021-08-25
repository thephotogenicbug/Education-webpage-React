import React from 'react'
import Footer from '../Components/Footer'
import { Icon } from '../Components/icons/styles/icons'
import {Link} from 'react-router-dom'

export function FooterContainer() {
    return (
        <Footer >
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>Head Office</Footer.Title>
                     <p className="text-white">
                      No 20 2nd Floor Lady Curzon Rd Santha Complex Shivaji Nagar Bengaluru Karnataka 560001
                     </p>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>University</Footer.Title>
                    <Footer.Link href="#">Annamalai University</Footer.Link>
                    <Footer.Link href="#">Jain University</Footer.Link>
                    <Footer.Link href="#">Singhania University</Footer.Link>
                 
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#">Support</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}