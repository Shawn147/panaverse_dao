"use client";

import { Text } from "@chakra-ui/react";
const error = (errors: any) => <Text>error {JSON.stringify(errors)}</Text>;
export default error;
