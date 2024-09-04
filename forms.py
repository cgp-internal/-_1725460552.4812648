def convert_message(message, conversion_type):
    if conversion_type == 'uppercase':
        return message.upper()
    elif conversion_type == 'lowercase':
        return message.lower()
    else:
        return "Invalid conversion type"