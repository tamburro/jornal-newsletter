import React from 'react';
import Logo from'../assets/logo_topo.png'


const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid  text-gray-300'>
      <div>
        <div className='flex justify-between'>
        <h1 className='w-full pt-0 justify text-3xl font-bold text-white'>4002 5300</h1>
        <img className='md:pt-1 pt-2 w-[30%] h-[30%] md:w-[20%] lg:w-[15%]' src={Logo} alt="/" />
        
      </div>
        
        <p className='py-4 text-xs'>GLOBO DIGITAL MENSAL: pague R$ 1,90/mês por 3 meses. Após, pague R$ 24,90/mês, preço padrão vigente.). GLOBO DIGITAL ANUAL: será cobrado R$ 178,80 por 1 ano de assinatura dividido em até 12 parcelas mensais. Após esse período, o valor anual passa a ser R$238,80, podendo ser dividido em até 12 parcelas mensais, ou o preço padrão vigente da oferta anual. Pagamento apenas com cartão de crédito (American Express, MasterCard, Elo e Visa) e conta corrente. Ao optar pelo plano anual, não há reembolso pelo período restante da vigência, caso o cancelamento ocorra em prazo inferior aos 12 meses contratados. GLOBO IMPRESSO 3 DIAS (sexta a domingo): R$ 47.90/mês por 6 meses. Após este período, pague R$ 97,90/mês, preço padrão vigente. Caso o assinante não se manifeste de forma contrária, para sua maior comodidade, a assinatura será renovada automaticamente ao término do período contratado, aos preços então vigentes. Oferta válida somente para o RJ. A assinatura do jornal só será possível se o endereço de entrega estiver dentro do perímetro de distribuição domiciliar. Pagamento no cartão de crédito ou conta corrente. Jornal digital (através do aplicativo O GLOBO) disponível para smartphones e tablets compatíveis com os sistemas iOS (a partir da versão 11.0) e Android (a partir da versão 5), e para computadores. Aplicativo GLOBO MAIS disponíveis para smartphones e tablets compatíveis com os sistemas iOS (a partir da versão 11.0) e Android (a partir da versão 5). Informamos que os descontos são em relação ao preço padrão vigente. Caso o assinante não se manifeste de forma contrária, para sua maior comodidade, a assinatura será renovada automaticamente ao término do período contratado, aos preços então vigentes. Oferta válida somente para novos assinantes/pessoa física. App Globoplay não está incluído em nenhuma das assinaturas. O GLOBO não entra em contato para cobrança de multa ou renovação da assinatura. Desconsidere qualquer contato a respeito desses temas.</p>
        
      </div>
      
    </div>
  );
};

export default Footer;
