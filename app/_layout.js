import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Stack } from "expo-router";

export default function RootLayout () {
    return (
        <GluestackUIProvider mode ="light">
            {/* <Stack screen Options={(headerShown: false)}> */}
            <Stack>
               <Stack.Screen name="home" options={{headerTitle: "Pagina Principal"}} />
               <Stack.Screen name="index" options={{headerTitle: "Detlhes"}} />
            </Stack>
        </GluestackUIProvider> 
    )
}