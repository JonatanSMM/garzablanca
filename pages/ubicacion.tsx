"use client"
import CFooter from './components/estructura/footer'
import CFormulario from './components/estructura/formulario'
import CTop from './components/estructura/top'
import CAdorno from './components/estructura/adorno'
import { Card, Row } from 'react-bootstrap'
import CUbicacion from './components/estructura/ubicacion'
import { useEffect, useState } from 'react'
export default function EstructuraInicio() {
  const [datos, setDatos] = useState([]);
  useEffect(() => {
    fetch('/db.json')
      .then(response => response.json())
      .then(json => {
        const data: any[] = json.pgubicaciongb;
        setDatos(data);
      })
      .catch(error => console.error('Error al obtener datos:', error));
  }, []);
  return (
    <>
      <Row className='bg-white m-0'>
        <Card className='p-0'>
          <CTop />
          <div className="x_content" >
            <CAdorno />
            <div className="container">
              <div className="row g-5">
                {datos.map((fila, index) => (
                  <div className="col-md-7 col-lg-8" key={index}>
                    <h2 className="fw-bold cProyect">{fila.titulo}</h2>
                    <div className="container mt-4">
                      <div className="row">
                        <div className="d-grid gap-2 d-md-block pb-3">
                          <a href={fila.ruta1} target='_blank'> <button className="btn bgProyect text-light fw-bold" type="button">{fila.boton1}</button></a>&nbsp;
                          <a href={fila.ruta2} target='_blank'><button className="btn btn-secondary fw-bold" type="button">{fila.boton2}</button></a>
                        </div>
                        <iframe src={fila.iframe} width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                      </div>
                    </div>
                  </div>
                ))}
                <CFormulario />
                <hr className="my-4 cProyect border-3" />
                <CUbicacion />

              </div>
            </div>
          </div>
          <CFooter rutatmp='./../../' />
        </Card>
      </Row>
    </>
  )
}
