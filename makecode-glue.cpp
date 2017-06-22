
extern "C" void usbConnectC(void);
extern "C" void usbDisconnectC(void);

namespace usb
{
//%
void connect(void)
{
    usbConnectC();
}
//%
void disconnect(void)
{
    usbDisconnectC();
}
}
