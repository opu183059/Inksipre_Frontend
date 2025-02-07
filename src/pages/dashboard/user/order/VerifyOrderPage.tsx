import { Link, useSearchParams } from "react-router-dom";
import Loader from "../../../../components/common/Loader";
import { Button, Card, Tag, Watermark } from "antd";
import { useVerifyOrderQuery } from "../../../../redux/feature/order/orderApi";

interface OrderData {
  id: number;
  order_id: string;
  currency: string;
  amount: number;
  payable_amount: number;
  discsount_amount: number | null;
  disc_percent: number;
  received_amount: string;
  usd_amt: number;
  usd_rate: number;
  is_verify: number;
  card_holder_name: string | null;
  card_number: string | null;
  phone_no: string;
  bank_trx_id: string;
  invoice_no: string;
  bank_status: string;
  customer_order_id: string;
  sp_code: string;
  sp_message: string;
  name: string;
  email: string;
  address: string;
  city: string;
  value1: string | null;
  value2: string | null;
  value3: string | null;
  value4: string | null;
  transaction_status: string | null;
  method: string;
  date_time: string;
}

const VerifyOrderPage = () => {
  const [searchParams] = useSearchParams();

  const { isLoading, data } = useVerifyOrderQuery(
    searchParams.get("order_id"),
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const orderData: OrderData = data?.data?.[0];
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <Watermark content={"Inkspire"}>
          <div className="container mx-auto p-4">
            <h3 className="text-xl font-bold mb-4">Invoice</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <p>Order Details</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="font-semibold">Order ID:</div>
                  <div>{orderData?.order_id}</div>
                  <div className="font-semibold">Amount:</div>
                  <div>
                    {orderData?.currency} {orderData?.amount?.toFixed(2)}
                  </div>
                  <div className="font-semibold">Status:</div>
                  <div>
                    <Tag
                      color={
                        orderData?.bank_status === "" ? "warning" : "processing"
                      }
                    >
                      {orderData?.bank_status}
                    </Tag>
                  </div>
                  <div className="font-semibold">Date:</div>
                  <div>{new Date(orderData?.date_time)?.toLocaleString()}</div>
                </div>
              </Card>

              <Card>
                <p>Payment Information</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="font-semibold">Method:</div>
                  <div>{orderData?.method}</div>
                  <div className="font-semibold">Transaction ID:</div>
                  <div>{orderData?.bank_trx_id}</div>
                  <div className="font-semibold">Invoice No:</div>
                  <div>{orderData?.invoice_no}</div>
                  <div className="font-semibold">SP Code:</div>
                  <div>{orderData?.sp_code}</div>
                  <div className="font-semibold">SP Message:</div>
                  <div>{orderData?.sp_message}</div>
                </div>
              </Card>

              <Card>
                <p>Customer Information</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="font-semibold">Name:</div>
                  <div>{orderData?.name}</div>
                  <div className="font-semibold">Email:</div>
                  <div>{orderData?.email}</div>
                  <div className="font-semibold">Phone:</div>
                  <div>{orderData?.phone_no}</div>
                  <div className="font-semibold">Address:</div>
                  <div>{orderData?.address}</div>
                  <div className="font-semibold">City:</div>
                  <div>{orderData?.city}</div>
                </div>
              </Card>

              <Card>
                <Button type="primary">
                  <Link to={"/user/dashboard/orders"}>View Order Details</Link>
                </Button>
              </Card>
            </div>
          </div>
        </Watermark>
      )}
    </div>
  );
};

export default VerifyOrderPage;
