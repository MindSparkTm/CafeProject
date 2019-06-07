from rest_framework import  serializers
from .models import Menu

class MenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = '__all__'

    def to_representation(self, obj):
        data = super(MenuItemSerializer, self).to_representation(obj)
        if 'type' in data:
            if data['type']==1:
                data['type'] = 'Side'
            elif data['type']==2:
                data['type'] = 'Main Course'
            elif data['type'] ==3:
                data['type'] = 'Appetizer'
            elif data['type']==4:
                data['type'] = 'Dessert'
            else:
                data['type'] = 'Not Specified'
        return data



