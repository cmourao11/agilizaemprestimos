import React from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark">
      {/* Hero / Sobre Nós */}
      <section className="relative py-20 bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-primary font-semibold tracking-wide uppercase mb-3">
            Sobre Nós
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-light dark:text-white mb-6 max-w-4xl mx-auto">
            Nossa História
          </h1>
          <p className="text-lg md:text-xl text-subtext-light dark:text-subtext-dark max-w-3xl mx-auto">
            Somos a Agiliza Crédito e Soluções, sua parceira de confiança para
            realizar projetos e alcançar a estabilidade financeira com segurança e
            transparência.
          </p>
        </div>
      </section>

      {/* Leadership Section - Quem está à frente da Agiliza? */}
      {/* Inserido logo abaixo do Hero conforme solicitado */}
      <section className="py-20 bg-background-light dark:bg-background-dark">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Text Content */}
            <div className="w-full md:w-1/2 space-y-6">
              <div className="inline-block px-4 py-1.5 bg-orange-100 dark:bg-orange-900/30 text-primary rounded-full font-semibold text-sm">
                Liderança
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-white">
                Quem está à frente da Agiliza?
              </h2>
              <div className="space-y-4 text-lg text-subtext-light dark:text-subtext-dark leading-relaxed">
                <p>
                  A Agiliza Crédito é liderada por uma equipe de especialistas com profundo conhecimento no mercado financeiro e na legislação de crédito consignado.
                </p>
                <p>
                  Nosso compromisso vai além dos números: buscamos entender a realidade de cada servidor público para oferecer soluções que realmente façam a diferença. Com uma gestão pautada na ética e na transparência, construímos uma empresa sólida e confiável.
                </p>
              </div>
              <div className="pt-2 flex items-center gap-4">
                <div className="flex -space-x-4">
                  <img className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-800 object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100&h=100" alt="Consultor" />
                  <img className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-800 object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100&h=100" alt="Consultora" />
                  <img className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-800 object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100&h=100" alt="Diretor" />
                </div>
                <div className="text-sm font-medium text-text-light dark:text-white">
                  <p>Equipe Especializada</p>
                  <p className="text-primary">Pronta para te atender</p>
                </div>
              </div>
            </div>
            {/* Image */}
            <div className="w-full md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src="/images/office-workspace.jpg"
                  alt="Equipe Agiliza trabalhando"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <p className="text-white font-medium text-lg border-l-4 border-primary pl-4">"Nosso foco é a sua tranquilidade financeira."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-text-light dark:text-white mb-4">
                  Nossa Missão
                </h2>
                <p className="text-subtext-light dark:text-subtext-dark text-lg leading-relaxed">
                  Oferecer acesso ao crédito consignado de forma ágil, descomplicada e totalmente transparente. Acreditamos que o crédito consciente é uma ferramenta poderosa para a realização de sonhos.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-text-light dark:text-white mb-6">
                  Nossos Valores
                </h3>
                <ul className="space-y-6">
                  {[
                    {
                      title: "Confiança e Transparência",
                      desc: "Processos claros e sem surpresas.",
                      icon: "verified_user",
                    },
                    {
                      title: "Foco no Cliente",
                      desc: "Soluções personalizadas para sua necessidade.",
                      icon: "groups",
                    },
                    {
                      title: "Agilidade",
                      desc: "Processos otimizados e respostas rápidas.",
                      icon: "speed",
                    },
                  ].map((val, idx) => (
                    <li key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-orange-100 dark:bg-orange-900/20 text-primary rounded-xl flex items-center justify-center">
                        <span className="material-icons-outlined text-2xl">
                          {val.icon}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-text-light dark:text-white mb-1">
                          {val.title}
                        </h4>
                        <p className="text-subtext-light dark:text-subtext-dark">
                          {val.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-2xl transform rotate-3"></div>
              <img
                src="/images/office-reception.jpg"
                alt="Recepção Agiliza"
                className="relative rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Expertise */}
      <section className="py-20 bg-background-light dark:bg-background-dark">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-text-light dark:text-white mb-16">
            Especialistas em Crédito Público
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Governo do Tocantins", icon: "account_balance" },
              { title: "Igeprev", icon: "history_edu" },
              { title: "Prefeituras Municipais", icon: "location_city" }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-surface-light dark:bg-surface-dark rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <span className="material-icons-outlined text-5xl text-primary mb-6 block mx-auto">{item.icon}</span>
                <h3 className="text-xl font-bold text-text-light dark:text-white">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6">
          <div className="bg-primary rounded-3xl p-10 md:p-16 text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Pronto para dar o próximo passo?</h2>
              <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
                Conte com a Agiliza para encontrar a melhor solução financeira para você.
              </p>
              <Link to="/contact" className="inline-flex items-center justify-center bg-white text-primary font-bold py-3.5 px-8 rounded-full shadow-lg hover:bg-orange-50 transition-colors">
                Fale com um Consultor(a)
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;