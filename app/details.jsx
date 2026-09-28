import { Text } from "@/components/ui/text";
import { Link, useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function Details() {
  const { name } = useLocalSearchParams();
    return (
        <Box className="flex-1 bg-white p-6">
            <VStack space="lg">
                <Text size="x1">
                    Esta e a rota "/details" (arquivo app/details.jsx)
                </Text>
                <Divider />
                <Text size="md">
                    Parametro recebido da outra tela: {name ? name : "Sem parametro"}
                </Text>
            </VStack>

        </Box>
    
    )
}