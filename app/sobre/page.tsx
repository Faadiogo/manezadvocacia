'use client';

import { motion } from 'framer-motion';
import { Scale, Users, Award, Target, Heart, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';


export default function AboutPage() {
  const values = [
    {
      icon: Scale,
      title: 'Justiça',
      description: 'Buscamos sempre a justiça e a equidade em todos os casos que defendemos.'
    },
    {
      icon: Shield,
      title: 'Integridade',
      description: 'Atuamos com transparência e ética em todas as nossas relações.'
    },
    {
      icon: Heart,
      title: 'Compromisso',
      description: 'Dedicação total aos interesses e necessidades de nossos clientes.'
    },
    {
      icon: Target,
      title: 'Excelência',
      description: 'Buscamos sempre a excelência técnica e o melhor resultado possível.'
    }
  ];

  const team = [
    {
      name: 'Dr. Raphael Henrique',
      role: 'CFO - Sócio Fundador',
      description: 'Especialista em Negociação e Recuperação de Crédito e em criar estratégias eficazes para a recuperação de ativos financeiros.',
      image: '/rapha.jpg'
    },
    {
      name: 'Dra. Simone Mañez',
      role: 'Advogada Sócia',
      description: 'Especializada no ramo de consórcio, com expertise em auditoria de carteiras e análise de recuperabilidade.',
      image: '/simone.jpg'
    },
    {
      name: 'Dra. Vanessa Mañez',
      role: 'Advogada Sócia',
      description: 'Especializada em compliance, auditoria e gestão de riscos, atuante no sistema de consórcios e no direito empresarial.',
      image: '/vanessa.jpg'
    },
    {
      name: 'Dr. Diego Ribeiro',
      role: 'Advogado Sócio',
      description: 'Atuante na área trabalhista, com vasta experiência em consultorias, auditorias e compliance trabalhista.',
      image: '/diego.jpg'
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
              Sobre a Mañez Advocacia
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Há mais de uma década oferecendo soluções jurídicas personalizadas
              com excelência, ética e compromisso com nossos clientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Fundado por quatro sócios, unidos pela missão de oferecer soluções jurídicas inovadoras e personalizadas. Na <strong className="text-brand-primary">Mañez</strong>, lidamos com desafios complexos, pois nos motivam constantemente, abordamos cada questão com paixão, dedicação e cuidado excepcionais. <br />
                  Com uma nova fase, estamos prontos para transformar o setor jurídico.
                </p>
                <p>
                  Lidamos com desafios complexos, pois nos motivam constantemente. Abordamos cada questão com paixão, dedicação e cuidado excepcionais.
                </p>
                <p>
                  Somos um escritório de advocacia visionário e acolhedor, composto por advogados especializados em diversas áreas do Direito. Com mais de 13 anos de experiência independente, cultivamos valores essenciais de ética e excelência. Nossa abordagem multidisciplinar e proativa destaca-se por sua pluralidade e inovação, visando impulsionar os negócios de nossos clientes e melhorar a sociedade como um todo.
                </p>
                <p>
                  Ao longo dos anos, expandimos nossa equipe com profissionais especializados
                  em diversas áreas do direito, mantendo sempre nossos valores fundamentais:
                  ética, transparência e compromisso com a justiça.
                </p>
                <p>
                  Hoje, somos reconhecidos como um dos escritórios de referência na região,
                  atendendo desde pessoas físicas até grandes empresas, sempre com a mesma
                  dedicação e excelência técnica.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Escritório Mañez Advocacia"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os princípios que norteiam nossa atuação e definem nossa identidade profissional.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <value.icon className="h-12 w-12 text-brand-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-brand-primary">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 via-secondary to-secondary/20 text-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">
              Nossa Equipe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profissionais experientes e especializados, unidos pelo compromisso
              com a excelência jurídica.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gradient-to-b from-[#b92c5a] via-[#6e1b37] to-[#210810] h-full hover:shadow-lg transition-shadow hover:translate-y-[-15px] transition duration-800">
                  <CardContent className="p-6">
                    <div className="aspect-square overflow-hidden rounded-lg mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-extrabold mb-2 text-brand-secondary">
                      {member.name}
                    </h3>
                    <p className="text-brand-secondary/90 font-bold mb-3">
                      {member.role}
                    </p>
                    <p className="text-brand-secondary/80 leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 via-secondary to-secondary/20 text-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Nossa Missão
            </h2>
            <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Oferecer serviços jurídicos de excelência, com soluções personalizadas
              e eficazes, sempre pautados pela ética, transparência e compromisso com
              a justiça, contribuindo para o desenvolvimento de nossos clientes e da sociedade.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}