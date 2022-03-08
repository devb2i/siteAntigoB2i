import { Container, ImageSectionDiv } from "./styles";
import { data } from './listImage';

import { BsArrowRightShort as Arrow } from 'react-icons/bs';
import Link from "next/link";


export function SectionImage() {
    return (
        <Container>
            {data.map((item, i) => {
                return (
                    <ImageSectionDiv key={item.id} >
                        <div
                            style={{
                                background: `url(/${item.image})`,
                                height: '95vh',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',

                            }}
                        >
                            <header>
                                {/* <h2>{item.title}</h2> */}
                                <p>{item.desc}</p>
                                <Link href={item.link}>
                                    <a >{item.linkTitle} <Arrow /></a>
                                </Link>

                            </header>

                        </div>
                    </ImageSectionDiv>
                );
            })}

        </Container>
    )
}