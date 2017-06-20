/**
 * USB HID support, with software USB emulation.
 */
//% weight=5 color=#2699BF icon="\uf110"
namespace usb {

    //% shim=usbConnectC
    //% parts="usbhid"
    function usbConnect() {
    }

    //% shim=usbDisconnectC
    //% parts="usbhid"
    function usbDisconnect() {
    }

    /**
     * A USB connection
     */
    export class USBHID {
        /**
         * Send a string to the keyboard.
         */
        //% blockId="usbhid_write" block="%usbhid|show" blockGap=8
        //% weight=79
        //% parts="usbhid"
        write(key: string) {

        }

        /**
         * Simulate plugging in the device.
         */
        connect() {
            usbConnect();
        }

        /**
         * Simulate unplugging the device.
         */
        disconnect() {
            usbDisconnect();
        }
    }

    export function create(): USBHID {
        let usbhid = new USBHID();
        usbhid.connect();
        return usbhid;
    }
}
