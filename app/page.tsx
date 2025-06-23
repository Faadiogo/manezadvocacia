'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Scale, Users, Award, CheckCircle, Phone, Mail, MapPin, Receipt, Building2, Handshake, House } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function HomePage() {
  const services = [
    {
      title: 'Recuperação de Crédito',
      description: 'Recuperação de crédito, cobrança de dívidas e negociação de parcelas.',
      icon: Receipt,
    },
    {
      title: 'Direito Empresarial',
      description: 'Constituição de empresas, contratos comerciais e consultoria empresarial.',
      icon: Building2,
    },
    {
      title: 'Direito Trabalhista',
      description: 'Questões trabalhistas, rescisões contratuais e representação sindical.',
      icon: Handshake,
    },
    {
      title: 'Direito Imobiliário',
      description: 'Compra, venda, locação e financiamento de imóveis.',
      icon: House,
    },
    {
      title: 'Lides especializados',
      description: 'Contratos, responsabilidade civil, direito de família e sucessões.',
      icon: Award,
    },
    {
      title: 'Gestão de risco, compliance & auditoria',
      description: 'Acompanhamento de riscos, auditoria de processos e compliance com as leis.',
      icon: Scale,
    },
  ];

  const features = [
    'Atendimento personalizado',
    'Equipe especializada',
    'Soluções eficazes',
    'Consultoria estratégica',
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 via-secondary to-secondary/20 text-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Soluções Jurídicas
                <span className="block text-brand-primary">Personalizadas</span>
              </h1>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Oferecemos consultoria jurídica especializada com foco em resultados eficazes 
                e atendimento personalizado para cada cliente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contato">
                  <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white/80">
                    Fale Conosco
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/sobre">
                  <Button size="lg" variant="default" className="text-white bg-primary hover:bg-primary/80">
                    Conheça Nossa História
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Escritório de advocacia"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent rounded-lg"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
              Nossas Especialidades
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos serviços jurídicos especializados em diversas áreas do direito,
              sempre com foco na excelência e nos resultados.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <service.icon className="h-12 w-12 text-brand-primary mb-6" />
                    <h3 className="text-xl font-semibold mb-4 text-brand-primary">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Equipe jurídica"
                className="rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
                Por que escolher a Mañez?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Nossa experiência e dedicação garantem soluções jurídicas eficazes 
                e personalizadas para cada necessidade.
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/sobre">
                  <Button size="lg" className="bg-brand-primary hover:bg-brand-primary/90">
                    Saiba Mais
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
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
              Precisa de Consultoria Jurídica?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar 
              com suas questões jurídicas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>contato@manezadvocacia.com.br</span>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/contato">
                <Button size="lg" className="bg-brand-primary text-brand-secondary hover:bg-brand-primary/90">
                  Agendar Consulta
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}