import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="text-center md:text-left z-10">
            <div className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-primary rounded-full font-semibold text-sm mb-6">
              Crédito Consignado
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-text-light dark:text-white mb-6">
              Crédito simples e <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                rápido para você
              </span>
            </h1>
            <p className="text-lg text-subtext-light dark:text-subtext-dark mb-10 max-w-xl mx-auto md:mx-0">
              Soluções financeiras para Servidores Públicos, Governo do Tocantins,
              Igeprev e Prefeituras. Realize seus projetos com as melhores
              condições do mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://wa.me/5563984832805"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary-dark text-white font-semibold py-3.5 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-center"
              >
                Solicitar Consultoria
              </a>
              <Link
                to="/about"
                className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-text-light dark:text-white font-semibold py-3.5 px-8 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-all text-center"
              >
                Conheça a Agiliza
              </Link>
            </div>
          </div>
          <div className="relative z-10">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-orange-300 rounded-[2rem] transform rotate-3 opacity-20 blur-xl"></div>
            <img
              src="/images/logo-square.jpg"
              alt="Agiliza Crédito Logo"
              className="relative rounded-[2rem] shadow-2xl w-full h-auto object-cover transform transition-transform hover:scale-[1.02] duration-500"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-surface-light dark:bg-surface-dark/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-white mb-4">
              Nossas Especialidades
            </h2>
            <p className="text-lg text-subtext-light dark:text-subtext-dark">
              Oferecemos soluções de crédito personalizadas para atender às suas
              necessidades específicas com agilidade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "corporate_fare",
                title: "Servidor Público",
                desc: "Condições exclusivas para funcionários públicos federais, estaduais e municipais.",
              },
              {
                icon: "account_balance",
                title: "Governo e Igeprev",
                desc: "Soluções de crédito consignado para servidores do Governo do Tocantins e Igeprev.",
              },
              {
                icon: "savings",
                title: "Saque FGTS",
                desc: "Antecipe seu Saque-Aniversário do FGTS de forma rápida, segura e sem burocracia.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-surface-dark p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/20 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-icons-outlined text-3xl">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-text-light dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-subtext-light dark:text-subtext-dark leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="text-primary font-bold tracking-wider text-sm mb-2 uppercase">
              Por que Agiliza?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-light dark:text-white mb-6">
              Vantagens que Fazem a Diferença
            </h2>
            <p className="text-lg text-subtext-light dark:text-subtext-dark mb-8">
              Descubra por que o crédito consignado com a Agiliza é a melhor
              escolha para a sua saúde financeira.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Taxas de Juros Reduzidas",
                  desc: "As parcelas são descontadas diretamente do seu salário, garantindo as menores taxas do mercado.",
                },
                {
                  title: "Liberação Rápida",
                  desc: "Processo ágil e sem burocracia para você ter o dinheiro na conta quando mais precisa.",
                },
                {
                  title: "Sem Consulta ao SPC/Serasa",
                  desc: "Aprovação facilitada, mesmo para quem possui restrições no nome.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center">
                    <span className="material-icons-outlined text-xl">
                      check
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-text-light dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-subtext-light dark:text-subtext-dark text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative max-w-md w-full">
              <div className="absolute -inset-4 bg-primary opacity-20 blur-lg rounded-full"></div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBus9PLCwcxP7pJJyZEQC1hePRXcvvGJg6wM1j0-uDDP1OJzOIVp8JqJ4tPzsruxwYk3RxcxRcmgrKwuxtcSF5DkllIRzaEhZzB_GrkZ7FsZHktsVyjggxQWMOPAr7rZeLGUtLNQrA2y5vmKDnDYkf2lk7C7uef9NG6qfM3CtItr8axJx5QwLEhlswkDTfFeRlrQ64rH_mUXWKZP707kEXQg14sdikW5NlEFB5l_z62B3b-zYSokOfDev5vIJZgjcDHPkoOT0MFq_U"
                alt="Happy customers meeting with agent"
                className="relative rounded-2xl shadow-2xl w-full h-auto z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="bg-primary rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-black opacity-10 rounded-full translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pronto para agilizar seus planos?
              </h2>
              <p className="text-orange-100 text-lg mb-10">
                Nossa equipe de consultores financeiros está pronta para encontrar
                a melhor solução de crédito para você. Fale conosco hoje mesmo!
              </p>
              <a
                href="https://wa.me/5563984832805"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary font-bold py-4 px-6 md:px-10 w-full sm:w-auto rounded-full hover:bg-orange-50 transition-all shadow-lg transform hover:-translate-y-1"
              >
                <span className="material-icons-outlined">whatsapp</span>
                Fale com um Consultor
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;