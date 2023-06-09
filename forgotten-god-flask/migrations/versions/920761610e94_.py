"""empty message

Revision ID: 920761610e94
Revises: 
Create Date: 2023-04-28 20:44:18.585118

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '920761610e94'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('sales', schema=None) as batch_op:
        batch_op.add_column(sa.Column('payment_date', sa.DateTime(), nullable=True))
        batch_op.add_column(sa.Column('payment_price', sa.Integer(), nullable=False))
        batch_op.add_column(sa.Column('payment_method', sa.Text(), nullable=False))
        batch_op.add_column(sa.Column('payment_data', sa.Text(), nullable=True))
        batch_op.drop_index('ix_sales_date')
        batch_op.create_index(batch_op.f('ix_sales_payment_date'), ['payment_date'], unique=False)
        batch_op.drop_column('date')
        batch_op.drop_column('is_refunded')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('sales', schema=None) as batch_op:
        batch_op.add_column(sa.Column('is_refunded', sa.BOOLEAN(), nullable=True))
        batch_op.add_column(sa.Column('date', sa.DATETIME(), nullable=True))
        batch_op.drop_index(batch_op.f('ix_sales_payment_date'))
        batch_op.create_index('ix_sales_date', ['date'], unique=False)
        batch_op.drop_column('payment_data')
        batch_op.drop_column('payment_method')
        batch_op.drop_column('payment_price')
        batch_op.drop_column('payment_date')

    # ### end Alembic commands ###
