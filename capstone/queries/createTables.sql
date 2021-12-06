CREATE TABLE IF NOT EXISTS FactoryOrders (
	orderID BIGINT UNSIGNED UNIQUE PRIMARY KEY NOT NULL,
    fullName VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    orderStatus VARCHAR(15), 
    transactionID BIGINT UNSIGNED UNIQUE,
    quantityRED INT UNSIGNED NOT NULL,
    quantityBLUE INT UNSIGNED NOT NULL,
    quantityWHITE INT UNSIGNED NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL
);