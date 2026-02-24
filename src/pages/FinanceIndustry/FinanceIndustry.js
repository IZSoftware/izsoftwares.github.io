import React from 'react'
import HeroSection from '../../components/FinanceIndustry/HeroSection'
import FinancialServices from '../../components/FinanceIndustry/FinancialServices'
import FinancialInstitutions from '../../components/FinanceIndustry/FinancialInstitutions'
import FinancialSolutions from '../../components/FinanceIndustry/FinancialSolutions'
import TechnologiesWeUse from '../../components/FinanceIndustry/TechnologiesWeUse'
import FAQ from '../../components/FinanceIndustry/FAQ'


function FinanceIndustry() {
  return (
    <>
      <HeroSection />
      <FinancialServices />
      <FinancialInstitutions />
      <FinancialSolutions />
      <TechnologiesWeUse />
      <FAQ />


    </>
  )
}

export default FinanceIndustry