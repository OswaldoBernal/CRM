import React, { useState, useRef } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';
import { StyleClass } from 'primereact/styleclass';
import 'primeicons/primeicons.css';
import './Sidebar1.css';

const SidebarItem = ({ label, icon, children }) => {
    const btnRef = useRef(null);

    return (
        <li>
            <StyleClass
                nodeRef={btnRef}
                selector="@next"
                enterClassName="hidden"
                enterActiveClassName="slidedown"
                leaveToClassName="hidden"
                leaveActiveClassName="slideup"
            >
                <div
                    ref={btnRef}
                    className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer"
                >
                    <span>
                        <i className={`pi ${icon} mr-2`}></i>
                        <span className="font-medium">{label}</span>
                    </span>
                    <i className="pi pi-chevron-down ml-auto"></i>
                    <Ripple />
                </div>
            </StyleClass>
            <ul className="list-none p-0 m-0 hidden overflow-hidden transition-all transition-duration-400 transition-ease-in-out">
                {children}
            </ul>
        </li>
    );
};

const SidebarLink = ({ label, icon, badge }) => (
    <li>
        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
            <i className={`pi ${icon} mr-2`}></i>
            <span className="font-medium">{label}</span>
            {badge && <span className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle" style={{ minWidth: '1.5rem', height: '1.5rem' }}>{badge}</span>}
            <Ripple />
        </a>
    </li>
);

export default function SidebarLat() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)} className="sidebar-lat">
                <div className='flex flex-wrap align-items-center justify-content-between flex-shrink-0'>
                    <img src='./Img/LogoP.webp' alt="Logo de BDS" className="logo" />
                    <h2 className='nombre'>Fútbol Fino</h2>
                </div>
                <hr className="mb-3 mx-3 border-top-1 border-none surface-border" />
                <h2>Sidebar</h2>
                <div className="overflow-y-auto">
                    <ul className="list-none p-3 m-0">
                        <SidebarItem label="Favoritos" icon="pi-star">
                            <SidebarLink label="Tablero" icon="pi-home" />
                            <SidebarLink label="Marcadores" icon="pi-bookmark" />
                            <SidebarItem label="Informes" icon="pi-chart-line">
                                <SidebarItem label="Ingresos" icon="pi-chart-line">
                                    <SidebarLink label="Vista" icon="pi-table" />
                                    <SidebarLink label="Buscar" icon="pi-search" />
                                </SidebarItem>
                                <SidebarLink label="Gastos" icon="pi-chart-line" />
                            </SidebarItem>
                            <SidebarLink label="Equipo" icon="pi-users" />
                            <SidebarLink label="Mensajes" icon="pi-comments" badge="3" />
                            <SidebarLink label="Calendario" icon="pi-calendar" />
                            <SidebarLink label="Configuraciones" icon="pi-cog" />
                        </SidebarItem>
                    </ul>
                    <ul className="list-none p-3 m-0">
                        <SidebarItem label="Aplicación" icon="pi-th-large">
                            <SidebarLink label="Proyectos" icon="pi-folder" />
                            <SidebarLink label="Desempeño" icon="pi-chart-bar" />
                        </SidebarItem>
                    </ul>
                </div>
            </Sidebar>
            <Button icon="pi pi-bars" onClick={() => setVisible(true)} className="menu-button" />
        </div>
    );
}
