#include "grainuum.h"
#include "kl17.h"

static struct GrainuumUSB usbPhy = {
    /* PTB6 */
    .usbdnIAddr = (uint32_t)&FGPIOB->PDIR,
    .usbdnSAddr = (uint32_t)&FGPIOB->PSOR,
    .usbdnCAddr = (uint32_t)&FGPIOB->PCOR,
    .usbdnDAddr = (uint32_t)&FGPIOB->PDDR,
    .usbdnMask = (1 << 6),
    .usbdnShift = 6,

    /* PTB5 */
    .usbdpIAddr = (uint32_t)&FGPIOB->PDIR,
    .usbdpSAddr = (uint32_t)&FGPIOB->PSOR,
    .usbdpCAddr = (uint32_t)&FGPIOB->PCOR,
    .usbdpDAddr = (uint32_t)&FGPIOB->PDDR,
    .usbdpMask = (1 << 5),
    .usbdpShift = 5,
};

void usbConnectC(void)
{
    grainuumConnect(&usbPhy);
}

void usbDisconnectC(void)
{
    grainuumDisconnect(&usbPhy);
}
