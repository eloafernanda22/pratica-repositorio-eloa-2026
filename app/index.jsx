import { View } from "react-native";
import { Link } from "expo-router";
import { Text } from "@/components/ui/text";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text size="xl">Bem-vindo ao App!</Text>
      
      {/* Link para ir para a tela details */}
      <Link href="/details">Ir para Detalhes</Link>
    </View>
  );
}