/**
 * USB HID support, with software USB emulation.
 */
//% weight=5 color=#2699BF icon="\uf110"
namespace usb {

    //% parts="usbhid"
    //% shim=usb::connect
    function usbConnect() {
    }

    //% parts="usbhid"
    //% shim=usb::disconnect
    function usbDisconnect() {
    }

    /**
     * Simulate plugging in the device.
     */
    //% blockId="usbhid_connect" block="connect USB"
    //% parts="usbhid"
    //% weight=85 blockGap=8    
    export function connect() {
        usbConnect();
    }

    /**
     * Simulate unplugging the device.
     */
    //% blockId="usbhid_disconnect" block="disconnect USB"
    //% parts="usbhid"
    //% weight=85 blockGap=8    
    export function disconnect() {
        usbDisconnect();
    }
}
