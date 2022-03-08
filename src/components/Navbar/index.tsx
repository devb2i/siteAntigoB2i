import { VscListSelection as ToggleList } from 'react-icons/vsc';
import { useState } from "react";
import { listService } from '../../servicoList';
import Link from 'next/link'

import { NavbarItems, DropdownContent } from "./style";
import { listProduct } from '../../productList';



export function Navbar() {

    const [isToggleActive, setIsToggleActive] = useState(false);

    function toogleBar() {
        setIsToggleActive(!isToggleActive);
    }


    return (
        <nav>
            <Link href="/">
                <a ><img src="/logoWhite.svg" alt="Logotipo B2I" /></a>
            </Link>

            <NavbarItems isToggle={isToggleActive}>
                <Link href="/">
                    <a>Início</a>
                </Link>

                <div className="dropdown">
                    <a href="/servicos">Serviços</a>
                    <DropdownContent>
                        {listService.map(service => (
                            <Link key={service.id} href={`/servicos/${service.name}#content`}>
                                <a>
                                    {service.title}
                                </a>
                            </Link>
                        ))}
                    </DropdownContent>
                </div>

                <div className="dropdown">
                    <a href="/produtos">Produto</a>
                    <DropdownContent>
                        {listProduct.map(product => (
                            <Link key={product.id} href={`/produtos/${product.name}#content`}>
                                <a>
                                    {product.title}
                                </a>
                            </Link>
                        ))}
                    </DropdownContent>
                </div>
                <a href="https://suporte.b2iti.com.br">Suporte Técnico</a>
                <a href="https://api.whatsapp.com/send/?phone=62999858201">Contato</a>
            </NavbarItems>
            <button type="button" onClick={toogleBar}>
                <ToggleList />
            </button>
        </nav>
    )
}