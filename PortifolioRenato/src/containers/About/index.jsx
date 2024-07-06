import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import './index.css'

export function About() {
    return (
        <>
            <Header />
            <main className="main_about">
                <img src="/about_photo.png" alt="" />
                <div className="about_description">
                    <h3>Um pouco sobre mim</h3>
                    <p>Olá, meu nome é Renato Filho, sou fotógrafo e estou no mercado há 5 anos. Meu trabalho é focado em
                        ensaios fotográficos, casamentos e eventos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Explicabo necessitatibus expedita odio repudiandae laudantium itaque voluptas harum velit, doloribus id
                        debitis facilis aliquid animi iste tenetur. Qui repellendus in assumenda?</p>

                    <div className="follow">
                        <h4>Siga no instagram</h4>
                        <div className="footer_icons">
                            <a href="https://www.instagram.com/renatofilhofoto?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                target="_blank">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png"
                                    alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}