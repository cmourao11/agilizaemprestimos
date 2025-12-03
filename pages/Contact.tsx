import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-primary font-bold uppercase tracking-wide mb-2">Fale Conosco</p>
            <h1 className="text-4xl md:text-5xl font-bold text-text-light dark:text-white mb-6">
              Entre em Contato
            </h1>
            <p className="text-lg text-subtext-light dark:text-subtext-dark">
              Tem alguma dúvida ou precisa de uma solução de crédito? Nossa equipe está pronta para ajudar.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="flex items-start gap-6 p-8 bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 transition-transform hover:-translate-y-1">
                <div className="flex-shrink-0 w-14 h-14 bg-orange-100 dark:bg-orange-900/20 text-primary rounded-full flex items-center justify-center">
                  <span className="material-icons-outlined text-2xl">location_on</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-light dark:text-white mb-2">Nosso Endereço</h3>
                  <p className="text-subtext-light dark:text-subtext-dark leading-relaxed">
                    Edifício Copas Verde 1º andar Sala 23<br />
                    104 Sul Rua SE 3, Palmas, Tocantins<br />
                    CEP: 77020-016
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-8 bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 transition-transform hover:-translate-y-1">
                <div className="flex-shrink-0 w-14 h-14 bg-green-100 dark:bg-green-900/20 text-green-600 rounded-full flex items-center justify-center">
                  <span className="material-icons-outlined text-2xl">chat</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-light dark:text-white mb-2">WhatsApp</h3>
                  <p className="text-subtext-light dark:text-subtext-dark mb-3">
                    Fale diretamente com um consultor.
                  </p>
                  <a
                    href="https://wa.me/5563984832805"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline flex items-center gap-1"
                  >
                    Iniciar conversa <span className="material-icons-outlined text-sm">arrow_outward</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 p-8 bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 transition-transform hover:-translate-y-1">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-100 dark:bg-blue-900/20 text-blue-600 rounded-full flex items-center justify-center">
                  <span className="material-icons-outlined text-2xl">email</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-light dark:text-white mb-2">E-mail</h3>
                  <p className="text-subtext-light dark:text-subtext-dark mb-3">
                    Para dúvidas e propostas.
                  </p>
                  <a
                    href="mailto:contato@agilizacredito.com"
                    className="text-primary font-semibold hover:underline"
                  >
                    contato@agilizacredito.com
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white dark:bg-surface-dark p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
              <h2 className="text-2xl font-bold text-text-light dark:text-white mb-8">
                Envie sua mensagem
              </h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Seu nome"
                    className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark text-text-light dark:text-white focus:ring-primary focus:border-primary py-3"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="voce@email.com"
                    className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark text-text-light dark:text-white focus:ring-primary focus:border-primary py-3"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
                    Telefone (opcional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="(00) 00000-0000"
                    className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark text-text-light dark:text-white focus:ring-primary focus:border-primary py-3"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Escreva sua dúvida ou solicitação aqui."
                    className="w-full rounded-lg border-gray-300 dark:border-gray-700 bg-background-light dark:bg-background-dark text-text-light dark:text-white focus:ring-primary focus:border-primary py-3"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg shadow-md transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="bg-surface-light dark:bg-surface-dark py-16">
          <div className="container mx-auto px-6">
               <div className="text-center mb-10">
                   <h2 className="text-2xl font-bold text-text-light dark:text-white">Onde nos encontrar</h2>
                   <p className="text-subtext-light dark:text-subtext-dark mt-2">Visite nosso escritório em Palmas para um atendimento presencial.</p>
               </div>
               <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
                    <iframe 
                        title="Agiliza Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.473539999719!2d-48.33433618520216!3d-10.200155792535783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93219b165215d861%3A0x6b49e1e3e4a93c7d!2sR.%20SE-3%2C%20104%20-%20Plano%20Diretor%20Sul%2C%20Palmas%20-%20TO%2C%2077020-016%2C%20Brazil!5e0!3m2!1sen!2sus!4v1689283748261!5m2!1sen!2sus" 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
               </div>
          </div>
      </section>
    </div>
  );
};

export default Contact;