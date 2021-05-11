import { Text, Box, Flex, Avatar } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            { showProfileData && (
                <Box mr="4" textAlign="right">
                <Text>Caio Vinicius</Text>
                    <Text 
                    color="gray.300"
                    fontSize="small"
                    >
                        aio_vinicius11111@hotmail.com
                    </Text>
                </Box>
            )}

                <Avatar size="md" name="Caio Vinicius" src="https://github.com/caiov13.png"/>
        </Flex>
    );
}