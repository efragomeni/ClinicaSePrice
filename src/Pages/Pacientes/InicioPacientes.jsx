import { BarraNav } from "../../Components/BarraNavegacion/BarraNav";
import ModernCarousel from "../../Components/Carrousel/ModernCarousel";
import "./inicioPacientes.css";

export const InicioPacientes = () => {
  const imageList = [
    "https://img.freepik.com/foto-gratis/oficina-medica-moderna-vacia-documentos-enfermedades-mesa-equipada-muebles-contemporaneos-lugar-trabajo-hospital-nadie-listo-consultas-enfermedad-apoyo-medicina_482257-35871.jpg",
    "https://img.freepik.com/foto-gratis/cerca-cientifico-escribiendo-tableta-mientras-equipo-biologos-realizan-investigaciones-biologicas-microscopio-backgorund-altas-horas-noche_482257-514.jpg?ga=GA1.1.1005348905.1748914102&semt=ais_hybrid&w=740",
    "https://img.freepik.com/fotos-premium/vista-panoramica-familia-hijos-hijos-encuentra-uniendo-sus-manos-al-atardecer-vista-trasera_255755-3120.jpg?ga=GA1.1.1005348905.1748914102&semt=ais_hybrid&w=1740",
  ];

  const centralTurnosData = [
    {
      id: 1,
       titulo: "Consulta Médica",
       descripcion: "Atención médica general con profesionales especializados",
      imagen:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      enlace: "/consulta-medica",
    },
    {
      id: 2,
      titulo: "Estudios por Imágenes",
      descripcion:
        "Radiografías, ecografías y tomografías de última generación",
      imagen:
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      enlace: "/estudios-imagenes",
    },
    {
      id: 3,
      titulo: "Central de turnos",
      descripcion:
        "Solicita tu turno de manera online de manera rápida y sencilla o de forma telefónica",
      imagen:
        "https://media.gettyimages.com/id/1911521660/es/foto/call-center-workers.jpg?s=612x612&w=0&k=20&c=ghmf98Jwyv89wgkoerXo4TspkwPWrwO4_53UNHFLpJM=",
      enlace: "/central-turnos",
    },
  ];

  const novedadesData = [
    {
      id: 1,
      titulo: "Nueva tecnología en diagnóstico",
      descripcion:
        "Incorporamos equipos de última generación para mejores diagnósticos",
      imagen:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      fecha: "15 Nov 2024",
    },
    {
      id: 2,
      titulo: "Ampliación de horarios",
      descripcion:
        "Nuevos horarios de atención para mayor comodidad de nuestros pacientes",
      imagen:
        "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      fecha: "10 Nov 2024",
    },
  ];

  const testimoniosData = [
    {
      id: 1,
      nombre: "María González",
      comentario:
        "Excelente atención médica, profesionales muy capacitados y instalaciones modernas.",
      calificacion: 5,
    },
    {
      id: 2,
      nombre: "Carlos Rodríguez",
      comentario:
        "Muy conforme con el servicio. Rápido, eficiente y con mucha calidez humana.",
      calificacion: 5,
    },
    {
      id: 3,
      nombre: "Ana Martínez",
      comentario:
        "Los mejores profesionales de la zona. Siempre me siento en buenas manos.",
      calificacion: 5,
    },
  ];

  return (
    <div className="inicio-pacientes">
      {/* Barra de Navegación */}
      <BarraNav />

      {/* Modern Carousel Principal */}
      <section className="hero-section">
        <ModernCarousel images={imageList} />
      </section>

      {/* Central de Turnos */}
      <section className="central-turnos-section">
        <div className="container">
          {/* <h2 className="section-title">Central de turnos</h2> */}
          <div className="turnos-grid">
            {centralTurnosData.map((item) => (
              <div key={item.id} className="turno-card">
                <div className="card-image">
                  <img
                    src={item.imagen || "/placeholder.svg"}
                    alt={item.titulo}
                  />
                </div>
                <div className="card-content">
                  <h3>{item.titulo}</h3>
                  <p>{item.descripcion}</p>
                  <button className="card-button">SOLICITAR TURNO</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Novedades SePrice */}
      <section className="novedades-section">
        <div className="container">
          <h2 className="section-title">Novedades SePrice</h2>
          <div className="novedades-grid">
            {novedadesData.map((novedad) => (
              <div key={novedad.id} className="novedad-card">
                <div className="novedad-image">
                  <img
                    src={novedad.imagen || "/placeholder.svg"}
                    alt={novedad.titulo}
                  />
                </div>
                <div className="novedad-content">
                  <span className="novedad-fecha">{novedad.fecha}</span>
                  <h3>{novedad.titulo}</h3>
                  <p>{novedad.descripcion}</p>
                  <button className="novedad-button">LEER MAS</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios de Pacientes */}
      <section className="testimonios-section">
        <div className="container">
          <h2 className="testimonios-title">
            Nuestros pacientes nos recomiendan
          </h2>
          <div className="testimonios-carousel">
            <div className="testimonios-container">
              {testimoniosData.map((testimonio) => (
                <div key={testimonio.id} className="testimonio-card">
                  <div className="testimonio-content">
                    <div className="estrellas">
                      {[...Array(testimonio.calificacion)].map((_, i) => (
                        <span key={i} className="estrella">
                          ★
                        </span>
                      ))}
                    </div>
                    <p>"{testimonio.comentario}"</p>
                    <h4>- {testimonio.nombre}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dirección */}
      <section className="direccion-section">
        <div className="container">
          <h2 className="section-title">Dirección</h2>
          <div className="direccion-content">
            <div className="direccion-info">
              <h3>SePrice Clínica Médica</h3>
              <p>Av. Lezama 1234, Ciudad</p>
              <p>Teléfono: (011) 4000-8900</p>
              <p>Email: info@seprice.com.ar</p>
            </div>
            <div className="direccion-mapa">
              <div className="mapa-placeholder">
              <img src="..\src\assets\img\mapa.png" alt="mapa ubicación" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
