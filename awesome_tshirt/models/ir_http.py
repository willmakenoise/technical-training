import random
from odoo import models


class IrHttp(models.AbstractModel):
    _inherit = 'ir.http'

    def session_info(self):
        result = super(IrHttp, self).session_info()
        """
        Returns a message to display in the HomeMenu
        """
        if random.random() > 0.5:
            message = "Bafien is watching you"
        else:
            message = "Bafien is totally sane. Also, please work harder."
        result['message'] = message
        return result
