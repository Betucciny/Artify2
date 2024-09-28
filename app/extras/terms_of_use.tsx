import React, { useState, ReactNode } from "react";
import { ScrollView, Text, StyleSheet, TouchableOpacity, View } from "react-native";
import Screen from "@/components/Screen"; 

interface AccordionItemProps {
  title: string;
  children: ReactNode; 
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.accordionItem}>
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <Text style={styles.subTitle}>{title}</Text>
      </TouchableOpacity>
      {expanded && <Text style={styles.paragraph}>{children}</Text>}
    </View>
  );
};

export default function TermsOfUse() {
  return (
    <Screen title="Términos de Uso">
      <ScrollView contentContainerStyle={styles.container}>
        
        <Text style={styles.paragraph}>
          Bienvenido a nuestra aplicación de transformación de imágenes impulsada por IA. Al utilizar este servicio, aceptas cumplir con los siguientes términos y condiciones. Por favor, léelos detenidamente para entender tus derechos y obligaciones.
        </Text>

        <AccordionItem title="1. Uso del Servicio">
          Nuestra aplicación permite a los usuarios cargar imágenes y aplicar filtros artísticos utilizando Inteligencia Artificial (IA). Los estilos disponibles incluyen Barroco, Renacimiento y otros movimientos artísticos. El uso de este servicio es estrictamente para fines personales y no comerciales.
        </AccordionItem>

        <AccordionItem title="2. Contenido Generado por el Usuario">
          Al cargar una imagen, confirmas que posees los derechos de la imagen o que has obtenido permiso del propietario legítimo. La aplicación no reclama la propiedad de las imágenes procesadas, pero nos reservamos el derecho de almacenar y utilizar las imágenes para mejorar nuestro modelo de IA.
        </AccordionItem>

        <AccordionItem title="3. Privacidad y Recopilación de Datos">
          Nuestra aplicación procesa tus imágenes en servidores seguros utilizando algoritmos avanzados de IA. Priorizamos la privacidad del usuario y no compartimos datos personales con terceros. Sin embargo, los datos anonimizados pueden ser utilizados para el entrenamiento y la mejora continua de los modelos de IA.
        </AccordionItem>

        <AccordionItem title="4. Derechos de Autor de Obras Generadas por IA">
          Las imágenes transformadas creadas por nuestra IA pueden incorporar estilos artísticos que son de dominio público (como el Barroco o el Renacimiento). Sin embargo, la salida final se considera contenido generado por el usuario, y los derechos de autor permanecen con el usuario, sujeto a cualquier derecho de terceros sobre la imagen original cargada.
        </AccordionItem>

        <AccordionItem title="5. Limitaciones del Servicio">
          Los algoritmos de IA de la aplicación tienen como objetivo proporcionar transformaciones artísticas precisas. Sin embargo, no podemos garantizar la perfección en la precisión del estilo o la calidad de la imagen. Los resultados pueden variar según la imagen de entrada y las capacidades de procesamiento en el momento de uso.
        </AccordionItem>

        <AccordionItem title="6. Modificaciones a los Términos">
          Nos reservamos el derecho de modificar estos Términos de Uso en cualquier momento. Los cambios serán efectivos inmediatamente después de su publicación. El uso continuo de la aplicación después de cualquier cambio constituirá tu consentimiento a dichos cambios.
        </AccordionItem>

        <AccordionItem title="7. Contáctanos">
          Si tienes alguna pregunta sobre estos Términos de Uso, por favor contáctanos en support@aiartapp.com.
        </AccordionItem>

      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F9F9F9", 
    borderRadius: 8, 
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333", 
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 5,
    color: "#555", 
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
    color: "#666", 
  },
  accordionItem: {
    marginBottom: 10,
    backgroundColor: "#fff", 
    borderRadius: 8, 
    padding: 10,
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2, 
  },
});
