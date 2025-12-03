import React from "react";

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "O que é o Empréstimo Consignado e quem pode contratar?",
      answer:
        "O Empréstimo Consignado é uma modalidade de crédito com desconto direto na folha de pagamento. É ideal para servidores públicos (federais, estaduais e municipais), aposentados e pensionistas do INSS, e funcionários de empresas conveniadas.",
    },
    {
      question: "Quais documentos são necessários para solicitar?",
      answer:
        "Geralmente, você precisará apresentar um documento de identificação com foto (RG ou CNH), CPF, comprovante de residência e o contracheque ou extrato de benefício mais recente para comprovação de renda.",
    },
    {
      question: "Como funciona o processo de contratação?",
      answer:
        "O processo é simples e rápido. Após a simulação e envio da documentação, realizamos a análise de crédito. Com a aprovação, o valor é liberado diretamente na sua conta em pouco tempo, e as parcelas são descontadas automaticamente do seu salário ou benefício.",
    },
    {
      question: "Quais são as vantagens do Empréstimo Consignado?",
      answer:
        "As principais vantagens são as taxas de juros, que estão entre as mais baixas do mercado, prazos de pagamento mais longos, e a praticidade do desconto em folha, que reduz o risco de inadimplência e facilita a aprovação, inclusive para negativados.",
    },
    {
      question: "Em quanto tempo o dinheiro cai na minha conta?",
      answer:
        "O prazo pode variar de acordo com a análise de crédito e o convênio, mas geralmente o processo é muito ágil. Em muitos casos, o valor é liberado no mesmo dia ou em até 48 horas úteis após a aprovação da proposta.",
    },
    {
        question: "Preciso ter o nome limpo?",
        answer: "Não necessariamente. Uma das grandes vantagens do consignado é que ele geralmente não exige consulta rigorosa aos órgãos de proteção ao crédito como SPC e Serasa, facilitando a aprovação para quem possui restrições."
    }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-text-light dark:text-white mb-6">
              Tire suas dúvidas sobre <span className="text-primary">Empréstimo Consignado</span>
            </h1>
            <p className="text-lg text-subtext-light dark:text-subtext-dark">
              Encontre respostas para as perguntas mais comuns sobre o crédito consignado para servidores públicos e aposentados.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-white dark:bg-surface-dark p-6 rounded-2xl border border-gray-200 dark:border-gray-800 transition-all duration-300 open:shadow-md"
              >
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-text-light dark:text-white pr-6">
                    {faq.question}
                  </h3>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-50 dark:bg-gray-800 flex items-center justify-center text-primary transition-transform duration-300 group-open:rotate-45 group-open:bg-primary group-open:text-white">
                    <span className="material-icons-outlined">add</span>
                  </span>
                </summary>
                <div className="mt-4 text-subtext-light dark:text-subtext-dark leading-relaxed border-t border-gray-100 dark:border-gray-800 pt-4">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-16 text-center">
             <p className="text-subtext-light dark:text-subtext-dark mb-6">Ainda tem dúvidas?</p>
            <a
              href="https://wa.me/5563984832805"
                target="_blank"
                rel="noopener noreferrer"
              className="inline-block px-8 py-3 font-semibold text-primary border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all"
            >
              Fale com um Especialista
            </a>
          </div>
          
           <div className="max-w-4xl mx-auto mt-20 text-center text-xs text-subtext-light dark:text-subtext-dark opacity-70">
            <p>Sujeito à análise de crédito e condições do produto. A quitação pode ocorrer a partir de 12 meses e até 96 meses. Taxas de juros a partir de 1,29% ao mês. Exemplo meramente ilustrativo (pode configurar oferta): valor do empréstimo de R$ 1.000,00 + IOF de R$ 31,71 + Taxa CET a.m 1,77 + Taxa CET a.a 23,84 + Taxa Jr. A.m 1,85 = valor total de R$ 5.811,81 em 96 parcelas de R$ 60,53.</p>
           </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;