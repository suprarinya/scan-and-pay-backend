import qrcode

# Data to encode
data = "http://192.168.208.195:4200/store/1/landing"

# Create QR code instance
qr = qrcode.QRCode(
    version=1,  # controls the size of the QR Code (1 = smallest)
    error_correction=qrcode.constants.ERROR_CORRECT_L,  # error correction level
    box_size=10,  # size of each box in pixels
    border=4,  # thickness of the border (minimum is 4)
)

# Add data to the instance
qr.add_data(data)
qr.make(fit=True)

# Create an image from the QR Code
img = qr.make_image(fill_color="black", back_color="white")

# Save the image
img.save("qr/qrcode.png")

print("QR code generated and saved as 'qrcode.png'")
