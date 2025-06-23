'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Scale, 
  Users, 
  Building, 
  Briefcase, 
  Shield, 
  FileText, 
  Gavel, 
  Heart,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ServicesPage() {
  const services = [
    {
      icon: Scale,
      title: 'Direito Civil',
      description: 'Soluções completas em direito civil para pessoas físicas e jurídicas.',
      features: [
        'Contratos em geral',
        'Responsabilidade civil',
        'Direito imobiliário',
        'Direito do consumidor',
        'Indenizações',
        'Usucapião'
      ],
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: Heart,
      title: 'Direito de Família',
      description: 'Acompanhamento sensível e especializado em questões familiares.',
      features: [
        'Divórcio e separação',
        'Guarda de filhos',
        'Pensão alimentícia',
        'Inventário e partilha',
        'União estável',
        'Adoção'
      ],
      color: 'bg-pink-50 text-pink-600'
    },
    {
      icon: Building,
      title: 'Direito Empresarial',
      description: 'Consultoria jurídica completa para empresas de todos os portes.',
      features: [
        'Constituição de empresas',
        'Contratos comerciais',
        'Fusões e aquisições',
        'Governança corporativa',
        'Recuperação judicial',
        'Consultoria empresarial'
      ],
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Users,
      title: 'Direito Trabalhista',
      description: 'Defesa dos direitos trabalhistas de empregados e empregadores.',
      features: [
        'Ações trabalhistas',
        'Rescisões contratuais',
        'Acordos trabalhistas',
        'Consultoria em RH',
        'Compliance trabalhista',
        'Negociações sindicais'
      ],
      color: 'bg-orange-50 text-orange-600'
    },
    {
      icon: Shield,
      title: 'Direito Previdenciário',
      description: 'Assessoria completa em benefícios previdenciários.',
      features: [
        'Aposentadorias',
        'Auxílio-doença',
        'Pensão por morte',
        'Revisão de benefícios',
        'Planejamento previdenciário',
        'LOAS/BPC'
      ],
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: Gavel,
      title: 'Direito Criminal',
      description: 'Defesa criminal com estratégia e dedicação integral.',
      features: [
        'Defesa criminal',
        'Habeas corpus',
        'Recursos criminais',
        'Júri popular',
        'Crimes econômicos',
        'Compliance criminal'
      ],
      color: 'bg-red-50 text-red-600'
    },
    {
      icon: FileText,
      title: 'Direito Tributário',
      description: 'Planejamento e defesa em questões tributárias complexas.',
      features: [
        'Planejamento tributário',
        'Defesas fiscais',
        'Parcelamentos',
        'Restituições',
        'Consultoria fiscal',
        'Contencioso tributário'
      ],
      color: 'bg-indigo-50 text-indigo-600'
    },
    {
      icon: Briefcase,
      title: 'Consultoria Jurídica',
      description: 'Assessoria jurídica preventiva e estratégica.',
      features: [
        'Consultoria preventiva',
        'Pareceres jurídicos',
        'Due diligence',
        'Compliance',
        'Treinamentos jurídicos',
        'Assessoria contínua'
      ],
      color: 'bg-teal-50 text-teal-600'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Consulta Inicial',
      description: 'Análise detalhada do seu caso e orientação sobre as melhores estratégias.'
    },
    {
      step: '02',
      title: 'Planejamento',
      description: 'Desenvolvimento de estratégia personalizada com cronograma e expectativas.'
    },
    {
      step: '03',
      title: 'Execução',
      description: 'Implementação das ações jurídicas com acompanhamento constante.'
    },
    {
      step: '04',
      title: 'Acompanhamento',
      description: 'Monitoramento contínuo e comunicação transparente sobre o andamento.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 via-secondary to-secondary/20 text-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos Serviços
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Oferecemos soluções jurídicas completas e especializadas para 
              atender todas as suas necessidades legais com excelência e dedicação.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
              Áreas de Atuação
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expertise especializada em diversas áreas do direito para oferecer 
              soluções completas e eficazes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-brand-primary mb-2">
                      {service.title}
                    </CardTitle>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
              Como Trabalhamos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nosso processo estruturado garante atendimento personalizado e 
              resultados eficazes em cada etapa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                    {item.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-brand-primary/20 -translate-x-8"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-brand-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 via-secondary to-secondary/20 text-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Precisa de Assessoria Jurídica?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar 
              com suas questões jurídicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato">
                <Button size="lg" className="bg-brand-primary text-brand-secondary hover:bg-brand-primary/90">
                  Agendar Consulta
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/blog">
                <Button size="lg" variant="default" className="bg-brand-primary text-brand-secondary hover:bg-brand-primary/90">
                  Ler Nosso Blog
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}