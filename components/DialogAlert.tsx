import * as React from "react";
import { Dialog, Portal, Text, Button } from "react-native-paper";

export type DialogAction =
  | {
      label: string;
      onPress: () => void;
    }[]
  | null;

type DialogAlertProps = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  title: string;
  content: string;
  actions: DialogAction;
};

const DialogAlert = ({
  visible,
  setVisible,
  title,
  content,
  actions,
}: DialogAlertProps) => {
  const hideDialog = () => setVisible(false);

  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Alert</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">This is simple dialog</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Done</Button>
          {actions &&
            actions.map(
              (action, index) =>
                action && (
                  <Button key={index} onPress={action.onPress}>
                    {action.label}
                  </Button>
                ),
            )}
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default DialogAlert;
